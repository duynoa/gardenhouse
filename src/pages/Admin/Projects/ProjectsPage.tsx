import React, { FormEvent, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  FolderKanban,
  Search,
  Trash2,
  RefreshCw,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
  Image as ImageIcon,
  MapPin,
  Calendar,
  Pencil,
  Upload,
  Loader2,
  Bold,
  Italic,
  List,
  ListOrdered,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import {
  projectApi,
  CreateProjectPayload,
  ListProjectsParams,
  uploadApi,
} from '../../../lib/admin/api/services';
import { Project } from '../../../lib/admin/types';
import { queryKeys } from '../../../lib/admin/queryKeys';
import { extractErrorMessage } from '../../../lib/admin/api/client';

const SORT_OPTIONS = [
  { value: '-createdAt', label: 'Mới nhất' },
  { value: 'createdAt', label: 'Cũ nhất' },
  { value: 'name', label: 'Tên A-Z' },
  { value: '-name', label: 'Tên Z-A' },
  { value: '-completionYear', label: 'Năm hoàn thành mới nhất' },
];

const LIMIT = 12;

type ProjectFormState = {
  name: string;
  slug: string;
  address: string;
  completionYear: string;
  type: string;
  summary: string;
  mainImage: string;
};

const emptyForm: ProjectFormState = {
  name: '',
  slug: '',
  address: '',
  completionYear: new Date().getFullYear().toString(),
  type: '',
  summary: '',
  mainImage: '',
};

export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [sort, setSort] = useState('-createdAt');
  const [editing, setEditing] = useState<Project | null>(null);
  const [creating, setCreating] = useState(false);

  const params: ListProjectsParams = useMemo(
    () => ({
      page,
      limit: LIMIT,
      search: search.trim() || undefined,
      sort,
    }),
    [page, search, sort],
  );

  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: queryKeys.projects.list(params),
    queryFn: () => projectApi.list(params),
    placeholderData: (prev) => prev,
  });

  const remove = useMutation({
    mutationFn: (id: string) => projectApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });
    },
  });

  const totalPages = query.data?.totalPages ?? 1;
  const total = query.data?.total ?? 0;

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-400 hidden sm:block">
            Tổng: <span className="font-bold text-white">{total.toLocaleString('vi-VN')}</span>
          </div>
          <button
            onClick={() => setCreating(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            Tạo dự án
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-3 flex flex-col sm:flex-row gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPage(1);
            setSearch(searchInput);
          }}
          className="flex-1 flex items-center bg-gray-950 border border-gray-800 rounded-xl px-3 focus-within:border-emerald-500"
        >
          <Search className="w-4 h-4 text-gray-500 shrink-0" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Tìm theo tên, địa chỉ, mô tả..."
            className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-hidden"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => {
                setSearchInput('');
                setSearch('');
                setPage(1);
              }}
              className="text-gray-500 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </form>

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="bg-gray-950 border border-gray-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-hidden focus:border-emerald-500"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} className="bg-gray-900">
              Sắp xếp: {o.label}
            </option>
          ))}
        </select>

        <button
          onClick={() => query.refetch()}
          disabled={query.isFetching}
          className="flex items-center justify-center gap-1.5 text-sm font-semibold text-emerald-400 bg-gray-950 border border-gray-800 rounded-xl px-4 py-2 hover:bg-gray-800 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${query.isFetching ? 'animate-spin' : ''}`} />
          Làm mới
        </button>
      </div>

      {/* Error */}
      {query.isError && (
        <div className="p-6 text-center text-sm text-red-400 flex items-center justify-center gap-2 bg-gray-900 border border-gray-800 rounded-2xl">
          <AlertCircle className="w-4 h-4" />
          {extractErrorMessage(query.error)}
        </div>
      )}

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm table-fixed">
            <colgroup>
              <col className="w-[30%]" />
              <col className="w-[20%]" />
              <col className="w-[10%]" />
              <col className="w-[25%]" />
              <col className="w-[15%]" />
            </colgroup>
            <thead className="bg-gray-800/60 text-[10px] uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-3 py-3 text-left font-bold">Tên dự án</th>
                <th className="px-3 py-3 text-left font-bold">Địa chỉ</th>
                <th className="px-3 py-3 text-left font-bold">Năm</th>
                <th className="px-3 py-3 text-left font-bold">Loại</th>
                <th className="px-3 py-3 text-right font-bold whitespace-nowrap">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {query.isLoading && (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-xs text-gray-500">
                    Đang tải...
                  </td>
                </tr>
              )}
              {!query.isLoading && query.data?.items.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-xs text-gray-500">
                    Chưa có dự án nào phù hợp. Nhấn "Tạo dự án" để bắt đầu.
                  </td>
                </tr>
              )}
              {query.data?.items.map((p) => (
                <tr key={p._id} className="hover:bg-gray-800/30 transition-colors align-top">
                  <td className="px-3 py-3">
                    <p className="font-semibold text-white break-words">{p.name}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      {new Date(p.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-start gap-1.5 text-xs text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-gray-500 mt-0.5 shrink-0" />
                      <span className="break-words">{p.address}</span>
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      {p.completionYear}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {p.type || '—'}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setEditing(p)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                        title="Sửa"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Xóa dự án "${p.name}"?`)) remove.mutate(p._id);
                        }}
                        disabled={remove.isPending}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                        title="Xóa"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl px-4 py-3 flex items-center justify-between text-xs text-gray-400">
          <span>
            Trang <span className="font-bold text-white">{page}</span> /{' '}
            <span className="font-bold text-white">{totalPages}</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <AnimatePresence>
        {creating && (
          <ProjectFormModal
            mode="create"
            onClose={() => setCreating(false)}
          />
        )}
        {editing && (
          <ProjectFormModal
            mode="edit"
            project={editing}
            onClose={() => setEditing(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}


// ---------------------------------------------------------------------------
// Image Uploader
// ---------------------------------------------------------------------------

function ImageUploader({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) {
        setUploadError('Vui lòng chọn file hình ảnh');
        return;
      }

      const blobUrl = URL.createObjectURL(file);
      setLocalPreview(blobUrl);
      setUploading(true);
      setUploadError(null);

      try {
        const result = await uploadApi.uploadImage(file, 'projects');
        URL.revokeObjectURL(blobUrl);
        setLocalPreview(null);
        onChange(result.url);
      } catch (err) {
        setUploadError(extractErrorMessage(err, 'Upload thất bại'));
      } finally {
        setUploading(false);
      }
    },
    [onChange],
  );

  const handleDelete = useCallback(async () => {
    const pathMatch = value.match(/\/uploads\/.+$/);
    if (!pathMatch) {
      onChange('');
      setLocalPreview(null);
      return;
    }

    setDeleting(true);
    try {
      await uploadApi.deleteImage(pathMatch[0]);
      onChange('');
      setLocalPreview(null);
    } catch {
      onChange('');
      setLocalPreview(null);
    } finally {
      setDeleting(false);
    }
  }, [value, onChange]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const imgSrc = localPreview ?? value;

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        disabled={disabled || uploading}
        className="hidden"
      />

      {imgSrc ? (
        <div className="relative rounded-xl overflow-hidden border border-gray-800">
          <img
            src={imgSrc}
            alt="preview"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-1">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/60 hover:bg-black/80 text-white text-xs backdrop-blur-xs transition-colors disabled:opacity-50"
              title="Đổi ảnh"
            >
              {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/60 hover:bg-red-500/80 text-white text-xs backdrop-blur-xs transition-colors disabled:opacity-50"
              title="Xóa ảnh"
            >
              {deleting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading || disabled}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="w-full aspect-video rounded-xl border-2 border-dashed border-gray-700 hover:border-emerald-500/50 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors disabled:opacity-50 cursor-pointer bg-gray-950"
        >
          {uploading ? (
            <>
              <Loader2 className="w-8 h-8 animate-spin" />
              <span className="text-xs">Đang tải lên...</span>
            </>
          ) : (
            <>
              <Upload className="w-8 h-8" />
              <span className="text-xs">Kéo thả hoặc bấm để chọn ảnh</span>
            </>
          )}
        </button>
      )}

      {uploadError && (
        <p className="text-[11px] text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {uploadError}
        </p>
      )}
    </div>
  );
}


// ---------------------------------------------------------------------------
// Rich Text Editor (TipTap)
// ---------------------------------------------------------------------------

function RichTextEditor({
  value,
  onChange,
  disabled,
  placeholder = 'Nhập nội dung...',
}: {
  value: string;
  onChange: (html: string) => void;
  disabled?: boolean;
  placeholder?: string;
}) {
  const [insertingImage, setInsertingImage] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder }),
      Image.configure({ HTMLAttributes: { class: 'rounded-xl max-w-full' } }),
    ],
    content: value,
    editable: !disabled,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const uploadedImages = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  useEffect(() => {
    if (!editor) return;

    const handleUpdate = () => {
      const currentSrcs = new Set<string>();
      editor.getJSON().content?.forEach((node) => {
        if (node.type === 'image') currentSrcs.add(String(node.attrs?.src ?? ''));
      });

      for (const [src, path] of uploadedImages.current.entries()) {
        if (!currentSrcs.has(src)) {
          uploadedImages.current.delete(src);
          uploadApi.deleteImage(path).catch(() => {});
        }
      }
    };

    editor.on('update', handleUpdate);
    return () => { editor.off('update', handleUpdate); };
  }, [editor]);

  const handleImageInsert = useCallback(async (file: File) => {
    if (!editor) return;
    if (!file.type.startsWith('image/')) {
      setImageError('Vui lòng chọn file hình ảnh');
      return;
    }
    setInsertingImage(true);
    setImageError(null);
    try {
      const result = await uploadApi.uploadImage(file, 'projects');
      const chain = editor.chain().focus() as any;
      chain.setImage({ src: result.url }).run();
      uploadedImages.current.set(result.url, result.path);
    } catch (err) {
      setImageError(extractErrorMessage(err, 'Upload ảnh thất bại'));
    } finally {
      setInsertingImage(false);
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="space-y-1">
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageInsert(file);
          e.target.value = '';
        }}
        disabled={disabled || insertingImage}
      />

      <div className="flex items-center gap-0.5 flex-wrap">
        {[
          { action: () => editor.chain().focus().toggleBold().run(), active: editor.isActive('bold'), Icon: Bold, title: 'Đậm' },
          { action: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive('italic'), Icon: Italic, title: 'Nghiêng' },
          { action: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive('bulletList'), Icon: List, title: 'Danh sách' },
          { action: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive('orderedList'), Icon: ListOrdered, title: 'Danh sách số' },
          { action: () => imageInputRef.current?.click(), active: false, Icon: ImageIcon, title: 'Chèn ảnh', loading: insertingImage },
        ].map(({ action, active, Icon, title, loading }, i) => (
          <button
            key={i}
            type="button"
            onClick={action}
            disabled={disabled || insertingImage}
            title={title}
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
              active
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            } disabled:opacity-40`}
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Icon className="w-3.5 h-3.5" />}
          </button>
        ))}
      </div>

      {imageError && (
        <p className="text-[11px] text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {imageError}
        </p>
      )}

      <div
        className={`tiptap-editor prose prose-sm prose-invert max-w-none rounded-xl border border-gray-800 bg-gray-950 p-3 min-h-[120px] focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 ${
          disabled ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <EditorContent editor={editor} />
      </div>

      <style>{`
        .tiptap-editor .ProseMirror {
          outline: none;
          min-height: 100px;
          font-size: 0.875rem;
          color: #e5e7eb;
        }
        .tiptap-editor .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #6b7280;
          pointer-events: none;
          float: left;
          height: 0;
        }
        .tiptap-editor .ProseMirror ul,
        .tiptap-editor .ProseMirror ol {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }
        .tiptap-editor .ProseMirror li {
          margin: 0.25rem 0;
        }
        .tiptap-editor .ProseMirror p {
          margin: 0;
        }
        .tiptap-editor .ProseMirror p + p {
          margin-top: 0.5rem;
        }
        .tiptap-editor .ProseMirror img {
          max-width: 100%;
          border-radius: 0.75rem;
          margin: 0.5rem 0;
        }
        .tiptap-editor .ProseMirror img.ProseMirror-selectednode {
          outline: 2px solid #10b981;
        }
      `}</style>
    </div>
  );
}


// ---------------------------------------------------------------------------
// Form Modal
// ---------------------------------------------------------------------------

function ProjectFormModal({
  mode,
  project,
  onClose,
}: {
  mode: 'create' | 'edit';
  project?: Project;
  onClose: () => void;
}) {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<ProjectFormState>(
    project
      ? {
          name: project.name,
          slug: project.slug,
          address: project.address,
          completionYear: project.completionYear,
          type: project.type,
          summary: project.summary,
          mainImage: project.mainImage,
        }
      : emptyForm,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const create = useMutation({
    mutationFn: (payload: CreateProjectPayload) => projectApi.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });
      onClose();
    },
    onError: (err) => setError(extractErrorMessage(err, 'Tạo dự án thất bại')),
  });

  const update = useMutation({
    mutationFn: (payload: Partial<CreateProjectPayload>) =>
      projectApi.update(project!._id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects.all });
      onClose();
    },
    onError: (err) => setError(extractErrorMessage(err, 'Cập nhật thất bại')),
  });

  const submitting = create.isPending || update.isPending;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.mainImage) {
      setError('Vui lòng upload hình ảnh dự án');
      return;
    }
    if (!form.summary || form.summary === '<p></p>') {
      setError('Vui lòng nhập mô tả dự án');
      return;
    }
    const payload: CreateProjectPayload = {
      name: form.name.trim(),
      slug: form.slug.trim() || undefined,
      address: form.address.trim(),
      completionYear: form.completionYear.trim(),
      type: form.type.trim(),
      summary: form.summary.trim(),
      mainImage: form.mainImage.trim(),
    };
    if (mode === 'create') {
      create.mutate(payload);
    } else {
      update.mutate(payload);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
        >
          <div className="px-6 py-4 border-b border-gray-800 flex items-start justify-between gap-4 sticky top-0 bg-gray-900 z-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-400">
                {mode === 'create' ? 'Tạo mới' : 'Chỉnh sửa'}
              </p>
              <h3 className="font-serif font-bold text-xl text-white mt-1">
                {mode === 'create' ? 'Tạo dự án mới' : 'Cập nhật dự án'}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <Field label="Tên dự án *" required>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputCls}
                placeholder="VD: Sân vườn biệt thự Vinhomes"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Slug (tùy chọn)" hint="Tự sinh nếu bỏ trống">
                <input
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className={inputCls}
                  placeholder="san-vinhomes"
                />
              </Field>
              <Field label="Loại dự án *" required>
                <input
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={inputCls}
                  placeholder="Biệt thự, Nhà phố, ..."
                />
              </Field>
            </div>

            <Field label="Địa chỉ *" required>
              <input
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className={inputCls}
                placeholder="VD: Long Biên, Hà Nội"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Năm hoàn thành *" required>
                <input
                  required
                  value={form.completionYear}
                  onChange={(e) =>
                    setForm({ ...form, completionYear: e.target.value })
                  }
                  className={inputCls}
                  placeholder="2025"
                />
              </Field>
            </div>

            <Field label="Hình ảnh *" required>
              <ImageUploader
                value={form.mainImage}
                onChange={(url) => setForm({ ...form, mainImage: url })}
                disabled={submitting}
              />
            </Field>

            <Field label="Mô tả *" required>
              <RichTextEditor
                value={form.summary}
                onChange={(html) => setForm({ ...form, summary: html })}
                disabled={submitting}
                placeholder="Nhập mô tả chi tiết về dự án..."
              />
            </Field>

            {error && (
              <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {error}
              </div>
            )}
          </div>

          <div className="px-6 py-4 border-t border-gray-800 bg-gray-900 flex items-center justify-end gap-3 sticky bottom-0">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="px-4 py-2 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 text-sm font-bold disabled:opacity-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-500/20 disabled:opacity-50"
            >
              {submitting
                ? 'Đang lưu...'
                : mode === 'create'
                  ? 'Tạo dự án'
                  : 'Lưu thay đổi'}
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
}

const inputCls =
  'w-full bg-gray-950 border border-gray-800 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20';

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
          {label}
        </label>
        {hint && <span className="text-[10px] text-gray-500">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

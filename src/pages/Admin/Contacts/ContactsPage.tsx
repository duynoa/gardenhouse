import { useMemo, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Search,
  Trash2,
  RefreshCw,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  Inbox,
  Mail,
  CalendarClock,
} from 'lucide-react';
import { contactApi, ListContactsParams } from '../../../lib/admin/api/services';
import { Contact } from '../../../lib/admin/types';
import { queryKeys } from '../../../lib/admin/queryKeys';
import { extractErrorMessage } from '../../../lib/admin/api/client';

const LIMIT = 20;

export default function ContactsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const params: ListContactsParams = useMemo(
    () => ({
      page,
      limit: LIMIT,
      search: search.trim() || undefined,
    }),
    [page, search],
  );

  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: queryKeys.contacts.list(params),
    queryFn: () => contactApi.list(params),
    placeholderData: (prev) => prev,
  });

  const remove = useMutation({
    mutationFn: (id: string) => contactApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.contacts.all });
    },
  });

  const totalPages = query.data?.totalPages ?? 1;
  const total = query.data?.total ?? 0;

  return (
    <div className="space-y-5 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="text-xs text-gray-400">
          Tổng cộng: <span className="font-bold text-white">{total.toLocaleString('vi-VN')}</span> liên hệ
        </div>
      </div>

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
            placeholder="Tìm theo tên, email, SĐT, nội dung..."
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

        <button
          onClick={() => query.refetch()}
          disabled={query.isFetching}
          className="flex items-center justify-center gap-1.5 text-sm font-semibold text-emerald-400 bg-gray-950 border border-gray-800 rounded-xl px-4 py-2 hover:bg-gray-800 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${query.isFetching ? 'animate-spin' : ''}`} />
          Làm mới
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {query.isError && (
          <div className="p-6 text-center text-sm text-red-400 flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {extractErrorMessage(query.error)}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm table-fixed">
            <colgroup>
              <col className="w-[18%]" />
              <col className="w-[20%]" />
              <col className="w-[14%]" />
              <col />
              <col className="w-[16%]" />
              <col className="w-[60px]" />
            </colgroup>
            <thead className="bg-gray-800/60 text-[10px] uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Khách hàng</th>
                <th className="px-4 py-3 text-left font-bold">Email</th>
                <th className="px-4 py-3 text-left font-bold">Số điện thoại</th>
                <th className="px-4 py-3 text-left font-bold">Nội dung</th>
                <th className="px-4 py-3 text-left font-bold">Ngày tạo</th>
                <th className="px-4 py-3 text-right font-bold">Xóa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {query.isLoading && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-xs text-gray-500">
                    Đang tải...
                  </td>
                </tr>
              )}
              {!query.isLoading && query.data?.items.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-xs text-gray-500">
                    Không có liên hệ nào phù hợp.
                  </td>
                </tr>
              )}
              {query.data?.items.map((c) => (
                <tr key={c._id} className="hover:bg-gray-800/30 transition-colors align-top">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-white break-words">{c.name}</p>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${c.email}`}
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 break-all"
                    >
                      {c.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`tel:${c.phone}`}
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 whitespace-nowrap"
                    >
                      {c.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-200 text-xs leading-relaxed whitespace-pre-wrap break-words">
                      {c.message}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="inline-flex items-start gap-1.5 text-xs text-gray-300">
                      <div>
                        <p>{new Date(c.createdAt).toLocaleDateString('vi-VN')}</p>
                        <p className="text-[10px] text-gray-500">
                          {new Date(c.createdAt).toLocaleTimeString('vi-VN', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          if (confirm(`Xóa liên hệ của "${c.name}"?`)) {
                            remove.mutate(c._id);
                          }
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

        {totalPages > 1 && (
          <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
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
      </div>
    </div>
  );
}

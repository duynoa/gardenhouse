import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // Cập nhật thẻ tiêu đề
    document.title = title ? `${title} | Garden House` : 'Garden House - Thi Công Sân Vườn, Ao Cá Bình Dân';

    // Cập nhật thẻ mô tả (meta description)
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'Garden House - Đơn vị thi công sân vườn, thảm cỏ, ao cá Koi và non bộ xi măng chất lượng, giá bình dân.');

    // Cập nhật thẻ từ khóa (meta keywords) nếu có
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Scroll to top khi chuyển trang để cải thiện trải nghiệm người dùng
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, keywords]);

  return null;
}
export type { SEOProps };

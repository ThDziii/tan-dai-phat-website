import { defineArrayMember, defineField, defineType } from 'sanity'

const categories = [
  { title: 'Tin tức', value: 'Tin tức' },
  { title: 'Kiến thức vận chuyển', value: 'Kiến thức vận chuyển' },
  { title: 'Hoạt động công ty', value: 'Hoạt động công ty' },
  { title: 'Hướng dẫn gửi hàng', value: 'Hướng dẫn gửi hàng' },
]

export const postType = defineType({
  name: 'post',
  title: 'Bài viết',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tiêu đề',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Tóm tắt',
      type: 'text',
      rows: 3,
      description: 'Đoạn ngắn hiển thị trên thẻ bài viết.',
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: 'mainImage',
      title: 'Ảnh bìa',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageAlt',
      title: 'Mô tả ảnh bìa',
      type: 'string',
      description: 'Mô tả ngắn nội dung ảnh để hỗ trợ người dùng trình đọc màn hình.',
      validation: (rule) => rule.max(140),
    }),
    defineField({
      name: 'body',
      title: 'Nội dung',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Đoạn văn', value: 'normal' },
            { title: 'Tiêu đề 2', value: 'h2' },
            { title: 'Tiêu đề 3', value: 'h3' },
            { title: 'Tiêu đề 4', value: 'h4' },
            { title: 'Trích dẫn', value: 'blockquote' },
          ],
          lists: [
            { title: 'Danh sách', value: 'bullet' },
            { title: 'Danh sách đánh số', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Đậm', value: 'strong' },
              { title: 'Nghiêng', value: 'em' },
              { title: 'Gạch chân', value: 'underline' },
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                type: 'object',
                title: 'Liên kết',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Mô tả ảnh',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Chú thích',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Chuyên mục',
      type: 'string',
      options: { list: categories, layout: 'dropdown' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Tác giả',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Ngày xuất bản',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'Tiêu đề SEO',
      type: 'string',
      description: 'Nếu để trống, website dùng tiêu đề bài viết.',
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Mô tả SEO',
      type: 'text',
      rows: 3,
      description: 'Nếu để trống, website dùng phần tóm tắt.',
      validation: (rule) => rule.max(160),
    }),
  ],
  orderings: [
    {
      title: 'Ngày xuất bản, mới nhất',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
})

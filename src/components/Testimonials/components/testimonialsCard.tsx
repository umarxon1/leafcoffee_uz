import { Avatar } from "antd";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Testimonial } from "@/types/type";
import { useLocale, useTranslations } from 'next-intl';



export default function TestimonialCard({ review }: { review: Testimonial }) {
  const t = useTranslations('header');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center h-full">
      <div className="-mt-12 mb-3 max-md:mt-0 bg-gray-200 rounded-[50%] p-5" >
        <UserOutlined className="text-6xl"/>
      </div>

      <div className="mb-2 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarFilled key={i} style={{ color: "#f6b83b" }} />
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-1">{review.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{review.city}</p>
      <p className="text-gray-700">{review.text}</p>
    </div>
  );
}

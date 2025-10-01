import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EyeIcon } from "lucide-react";

type StartupCardType = {
  _id: number | string;
  _createdAt: Date;
  views: number;
  author: {
    _id: number | string;
    name: string;
    image?: string;
  };
  title: string;
  description: string;
  category?: string;
};

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-medium line-clamp-1">{post.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${post.author?._id}`}>
          <Image
            src={post.author.image || "/default-avatar.png"}
            alt={post.author.name}
            className="startup-card_image"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="startup_card_desc">{post.description}</p>
      </Link>
    </li>
  );
};

export default StartupCard;

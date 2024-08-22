'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams ? searchParams.get('genre') : null;
  return (
    <div>
      <Link
        className={`hover:text-purple-500 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-purple-500 rounded-lg'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
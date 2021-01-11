import Link from 'next/link';
export default function IndexPage() {
  return (
    <div>
      <Link href="/">
        <h1 className="text-gray-800 text-3xl inline-block hover:underline cursor-pointer">
          Arrange Act Assert blog examples
        </h1>
      </Link>
      <h2 className="text-lg mt-8">Examples used in my blog.</h2>
      <ul className="list-inside list-disc mt-8 space-y-4 text-xl">
        <li>
          <Link href="/web-audio-issues">Web Audio Issues</Link>
        </li>
      </ul>
    </div>
  );
}

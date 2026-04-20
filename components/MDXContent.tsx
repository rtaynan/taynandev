import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxOptions } from "@/lib/mdx";

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} options={mdxOptions} />;
}

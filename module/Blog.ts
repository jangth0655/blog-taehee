import { readdirSync, readFileSync } from 'fs';
import { BlogCount, DataFileName } from '../model/types';

import { unified } from 'unified';
import matter from 'gray-matter';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse/lib';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';

class Blog {
  private root = './data';

  parseFileData = (title: DataFileName, path?: string) => {
    const files = this.readDir(title, path);
    const contentInfo = files.map((fileName) => {
      const content = readFileSync(
        `${this.root}/${title}/${fileName}`,
        'utf-8'
      );
      const [slug, _] = fileName.split('.');
      return {
        ...matter(content).data,
        slug,
      };
    });
    return contentInfo;
  };

  parseMarkdown = async (title: DataFileName, params: string) => {
    const { content, data } = matter.read(`${this.root}/${title}/${params}.md`);

    const { value } = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkImages)
      .use(remarkHtml)
      .process(content);

    return {
      value,
      data,
    };
  };

  parseFilePath = (title: DataFileName, path?: string) => {
    const files = this.readDir(title, path).map((file) => {
      const [slug, extension] = file.split('.');
      return { params: { slug } };
    });
    return files;
  };

  getFileLength = (title: DataFileName, path?: string) => {
    const length = this.readDir(title, path).length;
    if (!length) return 0;
    return length;
  };

  get fileCountData() {
    const jsCount = this.getFileLength('javascript') || 0;
    const typescriptCount = this.getFileLength('typescript') || 0;
    const reactCount = this.getFileLength('react') || 0;
    const errorCount = this.getFileLength('error-handling') || 0;
    const diaryCount = this.getFileLength('dev-diary') || 0;
    const blogFiles: BlogCount[] = [
      {
        id: 'js',
        count: jsCount,
      },
      {
        id: 'typescript',
        count: typescriptCount,
      },
      {
        id: 'react',
        count: reactCount,
      },
      {
        id: 'error-handling',
        count: errorCount,
      },
      {
        id: 'dev-diary',
        count: diaryCount | 0,
      },
    ];
    return [...blogFiles];
  }

  private readDir = (title: DataFileName, path?: string) => {
    return path
      ? readdirSync(`${blog.root}/${path}/${title}`)
      : readdirSync(`${blog.root}/${title}`);
  };
}

export const blog = new Blog();

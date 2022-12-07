import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse/lib';
import { unified } from 'unified';
import { BlogCount, DataFileName } from '../model/types';

class Blog {
  private root = './data';

  parseFileData = (title: DataFileName) => {
    const files = readdirSync(`${this.root}/${title}`);
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
      .use(remarkHtml)
      .process(content);

    return {
      value,
      data,
    };
  };

  parseFilePath = (title: DataFileName) => {
    const files = readdirSync(`${this.root}/${title}`).map((file) => {
      const [slug, extension] = file.split('.');
      return { params: { slug } };
    });
    return files;
  };

  getFileLength = (title: DataFileName) => {
    const length = readdirSync(`${this.root}/${title}`).length;
    return length;
  };

  get fileCountData() {
    const jsCount = this.getFileLength('javascript');
    const typescriptCount = this.getFileLength('typescript');
    const reactCount = this.getFileLength('react');
    const errorCount = this.getFileLength('error-handling');
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
    ];
    return [...blogFiles];
  }
}

export const blog = new Blog();

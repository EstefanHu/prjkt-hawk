import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | The Hawk Project',
  description: 'What Prjkt:Hawk does and why it exists',
};

export default function About() {
  return (
    <main>
      <div className="pageWrapper">
        <h1>The Hawk Project</h1>

        <p>I live in the heart of Seattle. I work from home</p>
      </div>
    </main>
  );
}

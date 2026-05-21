'use client';

import { useState } from 'react';
import { Image, FileText, Link2, BookOpen, Download, ExternalLink } from 'lucide-react';
import type { GalleryItem, GalleryItemType } from '@/lib/types';

const TABS: { key: GalleryItemType | 'ALL'; label: string; icon: React.ReactNode }[] = [
  { key: 'ALL',      label: 'All',       icon: <Image size={13} /> },
  { key: 'PHOTO',    label: 'Photos',    icon: <Image size={13} /> },
  { key: 'DOCUMENT', label: 'Documents', icon: <FileText size={13} /> },
  { key: 'LINK',     label: 'Links',     icon: <Link2 size={13} /> },
  { key: 'ESSAY',    label: 'Essays',    icon: <BookOpen size={13} /> },
];

function PhotoCard({ item }: { item: GalleryItem }) {
  return (
    <div className="card overflow-hidden group cursor-pointer">
      <div className="aspect-video overflow-hidden" style={{ background: 'var(--color-raised)' }}>
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      <div className="p-3">
        <p className="text-xs font-semibold truncate" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>{item.title}</p>
        {item.description && <p className="text-[11px] mt-0.5 line-clamp-2" style={{ color: 'var(--color-muted)', lineHeight: 1.55 }}>{item.description}</p>}
        {item.academicYear && <p className="text-[10px] mt-1" style={{ color: 'var(--color-primary)' }}>{item.academicYear}</p>}
      </div>
    </div>
  );
}

function DocumentCard({ item }: { item: GalleryItem }) {
  const isEssay = item.type === 'ESSAY';
  return (
    <div className="card p-4 flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-raised)' }}>
        {isEssay ? <BookOpen size={18} style={{ color: 'var(--color-primary)' }} /> : <FileText size={18} style={{ color: 'var(--color-primary)' }} />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold leading-snug" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>{item.title}</p>
        {item.description && <p className="text-[11px] mt-0.5 line-clamp-2" style={{ color: 'var(--color-muted)', lineHeight: 1.55 }}>{item.description}</p>}
        <div className="flex items-center gap-3 mt-2">
          {item.fileType && <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold" style={{ background: 'var(--color-raised)', color: 'var(--color-muted)' }}>{item.fileType}</span>}
          {item.fileSizeKb && <span className="text-[10px]" style={{ color: 'var(--color-muted)' }}>{item.fileSizeKb}kb</span>}
          {item.academicYear && <span className="text-[10px]" style={{ color: 'var(--color-primary)' }}>{item.academicYear}</span>}
        </div>
      </div>
      {item.url && item.url !== '#' && (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-0.5">
          <Download size={14} style={{ color: 'var(--color-muted)' }} />
        </a>
      )}
    </div>
  );
}

function LinkCard({ item }: { item: GalleryItem }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="card p-4 flex items-start gap-3 group block">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-raised)' }}>
        <Link2 size={18} style={{ color: 'var(--color-primary)' }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold leading-snug group-hover:underline" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>{item.title}</p>
        {item.description && <p className="text-[11px] mt-0.5 line-clamp-2" style={{ color: 'var(--color-muted)', lineHeight: 1.55 }}>{item.description}</p>}
        <p className="text-[10px] mt-1.5 truncate" style={{ color: 'var(--color-primary)' }}>{item.url}</p>
      </div>
      <ExternalLink size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-muted)' }} />
    </a>
  );
}

export function GallerySection({ gallery }: { gallery: GalleryItem[] }) {
  const [activeTab, setActiveTab] = useState<GalleryItemType | 'ALL'>('ALL');

  if (!gallery?.length) return null;

  const filtered = activeTab === 'ALL' ? gallery : gallery.filter(g => g.type === activeTab);

  // Which tabs have items?
  const hasCounts: Partial<Record<GalleryItemType | 'ALL', number>> = { ALL: gallery.length };
  for (const t of ['PHOTO', 'DOCUMENT', 'LINK', 'ESSAY'] as GalleryItemType[]) {
    const n = gallery.filter(g => g.type === t).length;
    if (n > 0) hasCounts[t] = n;
  }

  const visibleTabs = TABS.filter(t => hasCounts[t.key] !== undefined);

  return (
    <section className="w-full px-6 md:px-12 py-12">
      <p className="label mb-2">Gallery & Documents</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-6" style={{ color: 'var(--color-text)' }}>
        Files, Photos & Links
      </h2>

      {/* Tab bar */}
      <div className="flex gap-1 mb-6 flex-wrap">
        {visibleTabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            style={{
              background: activeTab === t.key ? 'var(--color-primary)' : 'var(--color-raised)',
              color: activeTab === t.key ? 'var(--color-bg)' : 'var(--color-muted)',
            }}
          >
            {t.icon} {t.label}
            <span className="ml-0.5 opacity-60">{hasCounts[t.key]}</span>
          </button>
        ))}
      </div>

      {/* Photos */}
      {filtered.some(g => g.type === 'PHOTO') && (
        <>
          {activeTab === 'ALL' && (
            <p className="text-[10px] font-semibold tracking-widest mb-3" style={{ color: 'var(--color-muted)' }}>PHOTOS</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {filtered.filter(g => g.type === 'PHOTO').map(item => (
              <PhotoCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {/* Documents & Essays */}
      {filtered.some(g => g.type === 'DOCUMENT' || g.type === 'ESSAY') && (
        <>
          {activeTab === 'ALL' && (
            <p className="text-[10px] font-semibold tracking-widest mb-3" style={{ color: 'var(--color-muted)' }}>DOCUMENTS & ESSAYS</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {filtered.filter(g => g.type === 'DOCUMENT' || g.type === 'ESSAY').map(item => (
              <DocumentCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {/* Links */}
      {filtered.some(g => g.type === 'LINK') && (
        <>
          {activeTab === 'ALL' && (
            <p className="text-[10px] font-semibold tracking-widest mb-3" style={{ color: 'var(--color-muted)' }}>LINKS</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.filter(g => g.type === 'LINK').map(item => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

    </section>
  );
}

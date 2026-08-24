'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(Math.min(window.innerWidth - 80, 800));
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (numPages && pageNumber < numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };

  return (
    <section className="w-full py-12 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#1a1a1a] border border-white/10 p-4 md:p-8 rounded-3xl"
      >
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <Document
            file="/Dinesh-Pawar-Resume.pdf"
            onLoadSuccess={onLoadSuccess}
            loading={
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary" />
              </div>
            }
            className="w-full"
          >
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              className="mx-auto"
            />
          </Document>

          {numPages && numPages > 1 && (
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="px-4 py-2 bg-primary/20 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/30 transition-colors"
              >
                ← Previous
              </button>

              <span className="text-gray-400 text-sm">
                Page {pageNumber} of {numPages}
              </span>

              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="px-4 py-2 bg-primary/20 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/30 transition-colors"
              >
                Next →
              </button>
            </div>
          )}

          <a
            href="/Dinesh-Pawar-Resume.pdf"
            download
            className="mt-6 px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors duration-300"
          >
            Download Resume PDF
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
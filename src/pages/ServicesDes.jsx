import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { ServicesAtom } from '../store/store';

export default function ServicesDes() {
  const service = useRecoilValue(ServicesAtom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-b from-gray-950 to-gray-900 font-sora">
      <div className="container mx-auto px-6 py-12">
        <h1 className="font-bold  text-3xl md:text-4xl lg:text-5xl mb-4 text-textPrimary">
          {service.services}
        </h1>
        <p className="mb-8 text-white">
          {service.description}
        </p>
      </div>
    </div>
  );
}

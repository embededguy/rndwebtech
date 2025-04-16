'use client';

import { useEffect } from 'react';
import $ from 'jquery';
import 'select2';

export default function Select2Tags({ name = 'tags[]' }) {
  useEffect(() => {
    $(`.select2-multi`).select2({
      tags: true,
      tokenSeparators: [',', ' '],
      placeholder: "Add tags...",
      width: '100%'
    });

    return () => {
      $(`.select2-multi`).select2('destroy');
    };
  }, []);

  return (
    <select
      className="form-control select2-multi"
      name={name}
      id="multi-select2"
      multiple
    ></select>
  );
}
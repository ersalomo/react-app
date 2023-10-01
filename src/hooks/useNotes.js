import { useEffect, useState } from 'react';
import { getInitialData } from '../utils/utils';

export default function useNotes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => setNotes(getInitialData()), []);
  return notes;
}

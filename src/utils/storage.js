const STORAGE_KEY = 'thanksDadCards';

export function saveCards(cards) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } catch (error) {
    console.error('Error saving cards to localStorage:', error);
  }
}

export function loadCards() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading cards from localStorage:', error);
    return [];
  }
}
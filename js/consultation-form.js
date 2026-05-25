import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDF87977025sFMPe5oLrwz5Wqssf8n6_LM',
  authDomain: 'zyun-design-website.firebaseapp.com',
  projectId: 'zyun-design-website',
  storageBucket: 'zyun-design-website.firebasestorage.app',
  messagingSenderId: '781904005147',
  appId: '1:781904005147:web:b25758883b6f0cf25c90be',
  measurementId: 'G-LLDCLG30FF'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('consultation-form');
const message = document.getElementById('consultation-message');

function setMessage(text) {
  if (message) message.textContent = text;
}

function track(name, params) {
  if (typeof window.trackZyunEvent === 'function') {
    window.trackZyunEvent(name, params || {});
  }
}

function value(data, key) {
  return String(data.get(key) || '').trim();
}

function normalizePhone(phone) {
  return phone.replace(/[^\d+]/g, '');
}

if (form) {
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const data = new FormData(form);
    if (value(data, 'website')) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const request = {
      name: value(data, 'name'),
      phone: value(data, 'phone'),
      email: value(data, 'email'),
      need: value(data, 'need'),
      preferredTime: value(data, 'preferredTime'),
      sourcePath: window.location.pathname,
      userAgent: navigator.userAgent.slice(0, 280),
      status: 'new',
      requestedAt: serverTimestamp()
    };

    if (!request.name || !request.phone || !request.email || !request.need || !request.preferredTime) {
      setMessage('請先填寫所有欄位。');
      return;
    }

    if (normalizePhone(request.phone).length < 6) {
      setMessage('請填寫完整的聯絡電話。');
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(request.email)) {
      setMessage('請填寫正確的 Email。');
      return;
    }

    submitButton.disabled = true;
    setMessage('正在送出...');

    try {
      await addDoc(collection(db, 'consultationRequests'), request);
      form.reset();
      setMessage('已收到您的預約需求，我們將盡快與您聯繫。');
      track('consultation_submit', { source_path: request.sourcePath });
    } catch (error) {
      console.error(error);
      setMessage('目前無法送出，請稍後再試，或直接透過電話與 Email 聯繫。');
      track('consultation_submit_error', { error_code: error.code || 'unknown' });
    } finally {
      submitButton.disabled = false;
    }
  });
}

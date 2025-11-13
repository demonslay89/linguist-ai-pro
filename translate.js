const fetch = require('node-fetch');
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { q, source='auto', target } = req.body || {};
  if (!q || !target) return res.status(400).json({ error: 'Missing params' });
  try {
    const url = 'https://libretranslate.de/translate';
    const r = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ q, source, target })
    });
    const j = await r.json();
    return res.json({ translation: j.translatedText || q });
  } catch(e){ return res.status(500).json({ error: 'Translation failed' }); }
};

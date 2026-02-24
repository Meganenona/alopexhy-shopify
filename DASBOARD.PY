TELEGRAM_TOKEN = os.environ['https://api.telegram.org/bot** 8670057688:AAGHgr9PbQAzxNezNyfJhQrih5--bk5XlcI**/getUpdates']
TELEGRAM_CHAT_ID = os.environ['8670057688']

def send_telegram(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    requests.post(url, json={
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    })

def test_message():
    send_telegram("""
🚀 <b>Alopexhy Dashboard</b>

✅ Connexion réussie !
Le bot est opérationnel.
    """)

test_message()

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  getApplications() {
    return fetch(`${this._url}/Applications`, {
      headers: this._headers,
      method: 'GET',
    }).then((res) => this._getResponse(res));
  }

  createApplication({ amount, price, side, instrument }) {
    return fetch(`${this._url}/Applications`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ amount, price, side, instrument }),
    }).then((res) => this._getResponse(res));
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }
}

export const api = new Api({
  url: 'https://65de4668dccfcd562f56b6d9.mockapi.io',
  headers: {
    'Content-type': 'application/json',
  },
});

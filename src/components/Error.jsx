// src/pages/ErrorPage.jsx

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // useRouteError hook'u, router'ın yakaladığı hatayı veya 
  // response'u (404 gibi) görmemizi sağlar.
  const error = useRouteError();
  console.error(error);

  let title = "Bir Hata Oluştu";
  let message = "Beklenmedik bir durum oluştu veya sayfa bulunamadı.";

  // Eğer hata bir response nesnesiyse (örneğin 404), durum kodunu kontrol et
  if (error.status === 404) {
    title = "404 - Sayfa Bulunamadı";
    message = "Aradığınız sayfa mevcut değil. Lütfen URL'yi kontrol edin.";
  } 
  
  // Axios veya diğer kütüphane hatalarını da burada yönetebilirsiniz
  // else if (error instanceof NetworkError) { ... }

  return (
    <div id="error-page" className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-red-600 mb-4">{title}</h1>
      <p className="text-lg text-gray-700 mb-6">{message}</p>
      
      {/* Detayları sadece geliştirme ortamında göster */}
      {process.env.NODE_ENV === 'development' && (
        <p className="italic text-gray-500">
          Hata Kodu/Mesajı: {error.statusText || error.message}
        </p>
      )}

      <button
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
        onClick={() => window.location.href = '/'} // Ana sayfaya yönlendir
      >
        Ana Sayfaya Git
      </button>
    </div>
  );
}
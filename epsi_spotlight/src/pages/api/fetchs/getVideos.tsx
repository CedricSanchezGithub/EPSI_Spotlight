// import { useState, useEffect } from 'react';
//
// export default function YoutubeLinks() {
//     const [links, setLinks] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         fetchLinks();
//     }, []);
//
//     const fetchLinks = async () => {
//         try {
//             const response = await fetch('/api/youtube-links');
//             if (!response.ok) {
//                 throw new Error('Erreur lors de la récupération des données');
//             }
//             const data = await response.json();
//             setLinks(data);
//             setIsLoading(false);
//         } catch (err: string) {
//             setError(err.message);
//             setIsLoading(false);
//         }
//     };
// }
import {Card, CardHeader} from '@nextui-org/card';
import {dataLinks} from './dataLinks.ts';
import {useMemo, useState} from 'react';
import {Chip} from "@nextui-org/chip";

const CARDS_PER_PAGE = 4;

// @ts-ignore
const LinkCards = ({ selectedFilters }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCards = useMemo(() => {
        if (selectedFilters.length === 0) {
            return dataLinks;
        }
        return dataLinks.filter(card =>
            card.tags.some(tag => selectedFilters.includes(tag))
        );
    }, [selectedFilters]);

    const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE);

    const indexOfLastCard = currentPage * CARDS_PER_PAGE;
    const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    const nextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    return (
        <Card className="p-4 mx-4">
            <CardHeader>
                <h2 className="uppercase font-bold">L'actualité des campus</h2>
            </CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCards.map((item) => (
                    <div key={item.id} className="border p-3 rounded-lg">
                        <h3 className="text-md font-semibold p-3">{item.utilisateur}</h3>

                        <Card className="w-full max-w-[560px] mx-auto overflow-hidden shadow-lg">
                            <div className="aspect-video">
                                <iframe
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    src={item.lien}
                                    title="YouTube video player"
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                        </Card>
                        Tags: {item.tags.map((tag, index) => (
                        <Chip key={index} className="mt-3 mx-1">{tag}</Chip>
                    ))}
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
                >
                    Précédent
                </button>
                <span>Page {currentPage} sur {totalPages}</span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
                >
                    Suivant
                </button>
            </div>
        </Card>
    );
};

export default LinkCards;
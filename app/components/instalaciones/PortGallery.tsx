import Image from "next/image";

type PortGalleryProps = {
    images: string[];
};

export default function PortGallery({
    images,
}: PortGalleryProps) {
    return (
        <section className="bg-white py-14 md:py-20">
            <div className="mx-auto max-w-ssa px-6 md:px-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <article
                            key={image}
                            className="group overflow-hidden"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`Puerto de Cozumel ${index + 1}`}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (minoup-hover:scale-105"
                                />

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
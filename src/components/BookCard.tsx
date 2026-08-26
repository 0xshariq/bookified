import Link from "next/link";
import {BookCardProps} from "../types";
import Image from "next/image";

const BookCard = ({ title, author, coverURL, slug }: BookCardProps) => {
    return (
        <Link href={`/books/${slug}`}>
            <article className="book-card">
                <figure className="book-card-figure">
                    <div className="book-card-cover-wrapper">
                        <Image src={coverURL} alt={title} width={133} height={200} className="book-card-cover" />
                    </div>

                    <figcaption className="book-card-meta">
                        <h3 className="book-card-title">{title}</h3>
                        <p className="book-card-author">{author}</p>
                    </figcaption>
                </figure>
            </article>
        </Link>
    )
}
export default BookCard

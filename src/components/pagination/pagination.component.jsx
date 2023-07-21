import "./pagination.styles.scss";

const Pagination = ({
    totalPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,
}) => {
    let pages = [];
    let firstPageButton, lastPageButton;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    if (currentPage < 5) {
        firstPageButton = 0;
        lastPageButton = 10;
    } else if (currentPage > pages.length - 5) {
        firstPageButton = pages.length - 10;
        lastPageButton = pages.length;
    } else {
        firstPageButton = currentPage - 5;
        lastPageButton = currentPage + 5;
    }

    let slicedPages = pages.slice(firstPageButton, lastPageButton);
    return (
        <div className="pagination-container">
            {slicedPages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setCurrentPage(page);
                    }}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;

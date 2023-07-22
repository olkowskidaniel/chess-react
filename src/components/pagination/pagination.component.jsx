import "./pagination.styles.scss";

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
    const pagesCount = Math.ceil(total / limit);

    const getButtonsCut = ({ pagesCount, cutButtonsAmount, currentPage }) => {
        const ceiling = Math.ceil(cutButtonsAmount / 2);
        const floor = Math.floor(cutButtonsAmount / 2);

        if (pagesCount < cutButtonsAmount) {
            return { start: 1, end: pagesCount + 1 };
        } else if (currentPage >= 1 && currentPage <= ceiling) {
            return { start: 1, end: cutButtonsAmount + 1 };
        } else if (currentPage + floor >= pagesCount) {
            return {
                start: pagesCount - cutButtonsAmount + 1,
                end: pagesCount + 1,
            };
        } else {
            return {
                start: currentPage - ceiling + 1,
                end: currentPage + floor + 1,
            };
        }
    };

    const buttonsCut = getButtonsCut({
        pagesCount,
        cutButtonsAmount: 5,
        currentPage,
    });
    const buttons = () => {
        return [...Array(buttonsCut.end - buttonsCut.start).keys()].map(
            (el) => el + buttonsCut.start
        );
    };

    return (
        <div className="pagination-container">
            <button onClick={() => onPageChange(1)}>First</button>
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Prev
            </button>
            {buttons().map((page, index) => (
                <button
                    key={index}
                    style={
                        currentPage === page
                            ? { backgroundColor: "yellow" }
                            : {}
                    }
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                disabled={currentPage === pagesCount}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
            <button onClick={() => onPageChange(pagesCount)}>Last</button>
        </div>
    );
};

export default Pagination;

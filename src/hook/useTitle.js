import  { useEffect } from 'react';

const useTitle = (title) => {
     useEffect(() => {
        document.title = `${title} - ProcToyz  `;
    }, [title])
};

export default useTitle;
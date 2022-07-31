const filter = () => {
    const   btnsMenu = document.querySelector('.portfolio-menu'),
            btnsList = btnsMenu.querySelectorAll('li'),
            blocksMenu = document.querySelector('.portfolio-wrapper'),
            allBlocks = blocksMenu.querySelectorAll('.all'),
            emptyBlocks = document.querySelector('.portfolio-no');

    btnsMenu.addEventListener('click', (e) => {
        btnsList.forEach(item => {
            if (e.target == item) {
                allBlocks.forEach(picture => {
                    picture.style.display = 'none';
                    picture.classList.remove('animated', 'fadeIn');
                });
                emptyBlocks.style.display = 'none';
                emptyBlocks.classList.remove('animated', 'fadeIn');

                let blocks = blocksMenu.querySelectorAll(`.${item.className}`);
                blocks.forEach(block => {
                    block.style.display = 'inline-block';
                    block.classList.add('animated', 'fadeIn');
                });
                } else if (e.target.className == 'grandmother' || 'granddad') {
                    emptyBlocks.style.display = 'inline-block';
                    emptyBlocks.classList.add('animated', 'fadeIn');
                }
            });        
    });
    
    document.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            btnsList.forEach(btn => {
                btn.classList.remove('active');
            });
            target.classList.add('active');
        }
    });
};

export default filter;
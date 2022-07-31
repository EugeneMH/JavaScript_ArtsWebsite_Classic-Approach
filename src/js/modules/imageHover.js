const imageHover = (blocks) => {
    const sizeBlocks = document.querySelectorAll(blocks);

    function showBlock(block) {
        let img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'none';
        });
        img.classList.add('animated', 'fadeIn');
    }

    function hideBlock(block) {
        let img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';

        block.querySelectorAll('p').forEach(item => {
            item.style.display = 'block';
        });

        img.classList.remove('animated', 'fadeIn');
    }    

    sizeBlocks.forEach(block => {
        block.addEventListener('mouseover', () => showBlock(block));
        block.addEventListener('mouseout', () => hideBlock(block));
    });

};

export default imageHover;
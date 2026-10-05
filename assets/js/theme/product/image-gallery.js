import 'easyzoom';

export default class ImageGallery {
    constructor($gallery) {
        this.$mainImage = $gallery.find('[data-image-gallery-main]');
        this.$mainImageNested = $gallery.find('[data-main-image]');
        this.$selectableImages = $gallery.find('[data-image-gallery-item]');
        this.currentImage = {};
    }

    init() {
        this.bindEvents();
        this.setImageZoom();
        this.enableMobileTouchZoomAndSwipe();
    }

    setMainImage(imgObj) {
        this.currentImage = { ...imgObj };

        this.setActiveThumb();
        this.swapMainImage();
    }

    setAlternateImage(imgObj) {
        if (!this.savedImage) {
            this.savedImage = {
                mainImageUrl: this.$mainImage.find('img').attr('src'),
                zoomImageUrl: this.$mainImage.attr('data-zoom-image'),
                mainImageSrcset: this.$mainImage.find('img').attr('srcset'),
                $selectedThumb: this.currentImage.$selectedThumb,
            };
        }
        this.setMainImage(imgObj);
    }

    restoreImage() {
        if (this.savedImage) {
            this.setMainImage(this.savedImage);
            delete this.savedImage;
        }
    }

    selectNewImage(e) {
        e.preventDefault();
        const $target = $(e.currentTarget);
        const imgObj = {
            mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
            zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
            mainImageSrcset: $target.attr('data-image-gallery-new-image-srcset'),
            $selectedThumb: $target,
            mainImageAlt: $target.children().first().attr('alt'),
        };
        this.setMainImage(imgObj);
        this.$selectableImages.removeClass('is-active-first');
    }

    setActiveThumb() {
        this.$selectableImages.removeClass('is-active');
        if (this.currentImage.$selectedThumb) {
            this.currentImage.$selectedThumb.addClass('is-active');
        }
    }

    swapMainImage() {
        const isBrowserIE = navigator.userAgent.includes('Trident');

        this.easyzoom.data('easyZoom').swap(
            this.currentImage.mainImageUrl,
            this.currentImage.zoomImageUrl,
            this.currentImage.mainImageSrcset,
        );

        this.$mainImage.attr({
            'data-zoom-image': this.currentImage.zoomImageUrl,
        });
        this.$mainImageNested.attr({
            alt: this.currentImage.mainImageAlt,
            title: this.currentImage.mainImageAlt,
        });

        if (isBrowserIE) {
            const fallbackStylesIE = {
                'background-image': `url(${this.currentImage.mainImageUrl})`,
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'background-origin': 'content-box',
                'background-size': 'contain',
            };

            this.$mainImageNested.css(fallbackStylesIE);
        }
    }

    checkImage() {
        const $imageContainer = $('.productView-image');
        const containerHeight = $imageContainer.height();
        const containerWidth = $imageContainer.width();

        const $image = this.easyzoom.data('easyZoom').$zoom;
        const height = $image.height();
        const width = $image.width();

        if (height < containerHeight || width < containerWidth) {
            this.easyzoom.data('easyZoom').hide();
        }
    }

    setImageZoom() {
        this.easyzoom = this.$mainImage.easyZoom({
            onShow: () => this.checkImage(),
            errorNotice: '',
            loadingNotice: '',
        });
    }

    bindEvents() {
        this.$selectableImages.on('click', this.selectNewImage.bind(this));
    }

    enableMobileTouchZoomAndSwipe() {
        if (window.innerWidth > 768) return;
    
        const imageWrapper = document.querySelector(".page_type__product .productView-images");
        const zoomableImage = document.querySelector(".page_type__product .productView-image img");
        const nextBtn = document.querySelector(".page_type__product .image-carousel-next");
        const prevBtn = document.querySelector(".page_type__product .image-carousel-prev");
    
        let touchStartX = 0;
        let touchEndX = 0;
        let touchTimer;
        let isZoomed = false;
    
        if (!imageWrapper || !zoomableImage) return;
        const baseImage = document.querySelector('figure.productView-image').getAttribute('data-zoom-image');
        const mobileImage = document.querySelector('.productView-image--default').getAttribute('src');
        //console.log(baseImage, mobileImage)
    
        imageWrapper.addEventListener("touchstart", (e) => {
            document.querySelector('.productView-image--default').setAttribute('src', baseImage);
            document.querySelector('.productView-image--default').setAttribute('sizes', '4800px');

            touchStartX = e.changedTouches[0].screenX;
            touchTimer = setTimeout(() => {
                isZoomed = true;
                imageWrapper.classList.add("image-zoomed");
                zoomableImage.style.transform = `scale(5)`;
                document.body.style.overflow = "hidden"; // prevent scroll
                document.querySelector(".product-images-tooltip.mobile").style.display = "none";
            }, 600);
        });
    
        imageWrapper.addEventListener("touchmove", (e) => {
            if (isZoomed) {
                e.preventDefault();
                const touch = e.touches[0];
                const rect = imageWrapper.getBoundingClientRect();
                const offsetX = ((touch.clientX - rect.left) / rect.width) * 100;
                const offsetY = ((touch.clientY - rect.top) / rect.height) * 100;
    
                zoomableImage.style.transformOrigin = `${offsetX}% ${offsetY}%`;
            } else {
                clearTimeout(touchTimer);
            }
        }, { passive: false });
    
        imageWrapper.addEventListener("touchend", (e) => {
            document.querySelector('.productView-image--default').setAttribute('src', mobileImage);
            document.querySelector('.productView-image--default').setAttribute('sizes', '325px');

            clearTimeout(touchTimer);
            if (isZoomed) {
                imageWrapper.classList.remove("image-zoomed");
                zoomableImage.style.transform = "";
                zoomableImage.style.transformOrigin = "center center";
                document.body.style.overflow = "";
                isZoomed = false;
                document.querySelector(".product-images-tooltip.mobile").style.display = "block";
                return;
            }
    
            touchEndX = e.changedTouches[0].screenX;
            const threshold = 50;
    
            if (touchEndX < touchStartX - threshold) {
                nextBtn?.click();
            } else if (touchEndX > touchStartX + threshold) {
                prevBtn?.click();
            }
        });
    }

    
}

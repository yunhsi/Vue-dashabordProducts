new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 1,
                img: 'https://media.doterra.com/tw/product-images/15ml-lavender.png',
                enabled: true,
                title: '薰衣草精油 10ml',
                category: '花類',
                unit: '10ml',
                origin_price: 800,
                price: 640,
                description: '將精油滴於枕頭、被褥或超音波香氛機，使氣味緩緩進入空氣周圍舒緩您的心靈空間，感受放鬆的香味旅程。將大自然芬芳綿延散佈於您最愛的空間角落，以獨特配方呈現不同的心情，在各個時刻為生活注入來自大地不同的能量。',
                content: '薰衣草是最常用來舒緩肌膚不適及幫助肌膚迅速修復的精油，使用在頸後及太陽穴按摩，可以幫助舒緩活動後的肌膚不適並獲得放鬆感受。嗅吸薰衣草可獲得舒壓及安寧的睡眠。由於薰衣草的通用性及舒緩的特性，它被認為是隨時隨地在手上都要有的一瓶精油。'
            },
            {
                id: 2,
                img: 'https://media.doterra.com/tw/product-images/5ml-rose.jpg',
                enabled: true,
                title: '玫瑰精油 10ml',
                category: '花類',
                unit: '10ml',
                origin_price: 800,
                price: 640,
                description: '將精油滴於枕頭、被褥或超音波香氛機，使氣味緩緩進入空氣周圍舒緩您的心靈空間，感受放鬆的香味旅程。將大自然芬芳綿延散佈於您最愛的空間角落，以獨特配方呈現不同的心情，在各個時刻為生活注入來自大地不同的能量。',
                content: '玫瑰精油能幫助平衡肌膚水分、減少瑕疵並且促進健康、均勻的膚色。玫瑰愉悅的氣味為兼具層次及深遠香甜的迷人組合。'
            },
            {
                id: 3,
                img: 'https://media.doterra.com/tw/product-images/15ml-basil.png',
                enabled: false,
                title: '羅勒精油 10ml',
                category: '草本類',
                unit: '10ml',
                origin_price: 880,
                price: 704,
                description: '將精油滴於枕頭、被褥或超音波香氛機，使氣味緩緩進入空氣周圍舒緩您的心靈空間，感受放鬆的香味旅程。將大自然芬芳綿延散佈於您最愛的空間角落，以獨特配方呈現不同的心情，在各個時刻為生活注入來自大地不同的能量。',
                content: '羅勒擁有溫暖、辛辣味以及草本的香氣，可幫助恢復精神和安定身心情緒。因高濃度的芳樟醇而具有調理身心的功能，塗抹於太陽穴與頸部後方，可舒緩緊繃情緒。此外，羅勒精油可安撫肌膚及舒緩運動後的不適感。擴香時能淨化空氣，讓您獲得順暢清新感受並營造放鬆的氛圍。'
            },
            {
                id: 4,
                img: 'https://media.doterra.com/tw/product-images/5ml-cinnamon.png',
                enabled: false,
                title: '肉桂精油 10ml',
                category: '木質類',
                unit: '10ml',
                origin_price: 880,
                price: 704,
                description: '將精油滴於枕頭、被褥或超音波香氛機，使氣味緩緩進入空氣周圍舒緩您的心靈空間，感受放鬆的香味旅程。將大自然芬芳綿延散佈於您最愛的空間角落，以獨特配方呈現不同的心情，在各個時刻為生活注入來自大地不同的能量。',
                content: '肉桂是一種熱帶長綠喬木，高達45英呎，具有高度香味的皮、葉和花。從樹皮中萃取，肉桂精油含強烈的清潔及淨化功能。肉桂可以幫助維持健康，特別是季節威脅高時。當擴香時，可以淨化空氣並幫助獲得順暢清新感受。'
            },
            {
                id: 5,
                img: 'https://media.doterra.com/tw/product-images/15ml-eucalyptus.png',
                enabled: true,
                title: '尤加利精油 10ml',
                category: '草本類',
                unit: '10ml',
                origin_price: 800,
                price: 660,
                description: '將精油滴於枕頭、被褥或超音波香氛機，使氣味緩緩進入空氣周圍舒緩您的心靈空間，感受放鬆的香味旅程。將大自然芬芳綿延散佈於您最愛的空間角落，以獨特配方呈現不同的心情，在各個時刻為生活注入來自大地不同的能量。',
                content: '尤加利精油可幫助獲得順暢清新感受並舒緩因運動或久站久坐造成之不適。尤加利精油的淨化特質對肌膚有益，也可用於淨化空氣及提升正向情緒。'
            },
        ],
        tempProduct: {},
    },
    methods: {
        //modal 狀態
        openModal(isNew, item) {
            switch (isNew) {
                case 'new':
                    this.tempProduct = {};
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, item);
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    $('#delProductModal').modal('show');
                    this.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
            }
        },
        //新增
        updateProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products[i] = this.tempProduct;
                    }
                });
            } else {
                // Unix Timestamp
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
        //刪除
        delProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');
        },
    },
});
class MusicItems extends PartyItems {
    constructor(domElement, items) {
        super(domElement, items);
        this.bindEvents();
    }

    asyncSearch() {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'post',
                dataType: 'json',
                url: 'http://s-apis.learningfuze.com/hackathon/youtube/search.php',
                data: {q: 'techno', maxResults: 5},
                success: data => {
                    console.log(data);
                    // let items = data.drinks.map(item => new PartyItem(item.id, item.name, item.descriptionn, item.image, item.linkURL));
                    let items = data.video.map(item => new VideoItem(
                        item.id, 
                        item.title, 
                        `http://i3.ytimg.com/vi/${item.id}/hqdefault.jpg`, 
                        this.handleItemClick, 
                        {}
                    ));
                    resolve(items);
                    
                },
                error: function(error){
                    throw new Exception("You're data request failed");
                }
            });
        });
    }
}
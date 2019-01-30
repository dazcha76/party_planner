class PartyItems {
    constructor(domElement, items) {
        this.domElement = domElement;
        this.domSearch = this.domElement.find('.search');
        this.domSearchResults = this.domElement.find('.listItems');
        this.domList = this.domElement.find('.list');

        this.items = items || [];
    }

    handleSearch() {
        console.log('PartyItems.handleSearch');
        this.asyncSearch()
            .then(items => items.map(item => item.renderSearch()))
            .then(items => this.domSearchResults.empty().append(items));
    }

    handleGetDetails() {
        console.log('PartyItems.handleGetDetails');
    }

    handleAddItem() {
        console.log('PartyItems.handleAddItem');
    }

    handleRemoveItem() {
        console.log('PartyItems.handleRemoveItem');
    }

    showList() {
        console.log('PartyItems.showList');
        let renderedItems = this.items.map(item => item.renderSearch());
        this.domList.append(renderedItems);
    }

    showSearch() {
        console.log('PartyItems.showSearch');
    }

    showDetails() {
        console.log('PartyItems.showDetails');
    }
}
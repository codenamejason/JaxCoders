// Write your Javascript code.
function HomePageViewModel(data) {
    var self = this;

    self.username = ko.observable(data.username);




}


ko.applyBindings(HomePageViewModel);
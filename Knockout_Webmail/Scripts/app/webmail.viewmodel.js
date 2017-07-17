function WebmailViewModel(app, dataModel) {
    var self = this;
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();


    // Behaviours
    self.goToFolder = function (folder) {
        self.chosenFolderId(folder);
        self.chosenMailData(null); // Stop showing a mail
                $.get('/mail', { folder: folder }, self.chosenFolderData);
    };
    self.goToMail = function (mail) {
        self.chosenFolderId(mail.folder);
        self.chosenFolderData(null); // Stop showing a folder
        $.get("/mail", { mailId: mail.id }, self.chosenMailData);
    };
    // Show inbox by default
    self.goToFolder('Inbox');

    // Client-side routes    
    Sammy(function () {
        this.get('#:folder', function () {
            location.hash  = folder
            //self.chosenFolderId(this.params.folder);
            //self.chosenMailData(null);
            //$.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
        });

        this.get('#:folder/:mailId', function () {
            location.hash = mail.folder + '/' + mail.id
            //self.chosenFolderId(this.params.folder);
            //self.chosenFolderData(null);
            //$.get("/mail", { mailId: this.params.mailId }, self.chosenMailData);
        });
        this.get('', function () { this.app.runRoute('get', '#Inbox') });

    }).run();

    Sammy(function () {
        this.get('#webmail', function () {
            // Call the web api
            $.ajax({
                method: 'get',
                url: app.dataModel.webmail,
                contentType: "application/json; charset=utf-8",
                headers: {
                    'Authorization': 'Bearer ' + app.dataModel.getAccessToken()
                },
                success: function (data) {
                    // connect viewmodel to backend here...


                }
            
            });
        });
        this.get('/', function () { this.app.runRoute('get', '#webmail'); });
    });

    return self;
}

app.addViewModel({
    name: "Webmail",
    bindingMemberName: "webmail",
    factory: WebmailViewModel
});
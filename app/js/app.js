angular.module('dealBroker', ['dbServices', 'xeditable', 'ui.bootstrap'])
    .controller('mainController', ['$scope', 'dbService', function($scope, dbService) {
        var _lang = 'en';
        var content = {};
        content.dealBroker = "Deal Broker";
        content.languageNav = "Language";
        content.contractsNav = "Contracts";
        content.aboutNav = "About";
        content.description = "Accessible legal documents for non-english speakers";
        content.generalTile = "General";
        content.freelanceTile = "Freelance";
        content.salesTile = "Sales";
        content.about1 = "Deal Broker is a service that makes it easier for non-native english speakers to create and understand contracts by providing users with simple contracts templates that, when transeferred between two users, can then be translated into a language of the users choice. ";
        content.about2 = "Whether you are a young professional from a foreign country looking for freelance work or if you are a recent immigrant looking to support your family, language should not be the barrier to entry for equality under the legal system. ";

        $scope.content = content;

        $scope.filler = {
            party1: '',
            party2: '',
            genStartDate: new Date(1984, 4, 15),
            genEndDate: new Date(1984, 4, 15),
            genAgreement1: '',
            genAgreement2: '',
            state: 'Arizona',
            signature: '',
            signature2: '',
            email: '',
            email2: '',
            signHere: 'Sign Here',
            enterEmail: 'Enter Email',
            empty: 'empty'
        }
        $scope.filler.gen1 = "This Contract is entered into by and between ";
        $scope.filler.gen2 = " [AN INDIVIDUAL, OR TYPE OF BUSINESS ENTITY] (“First Party”), and ";
        $scope.filler.gen3 = " [AN INDIVIDUAL, OR TYPE OF BUSINESS ENTITY] (“Second Party”). The term of this Agreement shall begin on ";
        $scope.filler.gen4 = " and shall continue through its termination date of ";
        $scope.filler.gen5 = " In consideration of the mutual promises set forth herein, the First Party covenants and agrees that it shall ";
        $scope.filler.gen6 = " The Second Party covenants and agrees that it shall ";
        $scope.filler.gen7 = "This Contract may not be modified in any manner unless in writing and signed by both Parties. This document and any attachments hereto constitute the entire agreement between the Parties. This Contract shall be binding upon the Parties, their successors, heirs and assigns and shall be enforced under the laws of the State of ";
        $scope.filler.gen8 = "Both parties agree that digitally writing each participant's name will signify their signature and agreement to this contract.";


        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


        $scope.translate = function(lang) {

            if (_lang !== lang) {
                dbService.translate(_lang, lang, {
                        text: content.dealBroker
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        content.dealBroker = data;

                    });

                dbService.translate(_lang, lang, {
                        text: content.languageNav
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        content.languageNav = data;

                    });
                dbService.translate(_lang, lang, {
                        text: content.contractsNav
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.contractsNav = data;

                    });

                dbService.translate(_lang, lang, {
                        text: content.aboutNav
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.aboutNav = data;

                    });
                dbService.translate(_lang, lang, {
                        text: content.description
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.description = data;

                    });
                dbService.translate(_lang, lang, {
                        text: content.generalTile
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.generalTile = data;

                    });
                dbService.translate(_lang, lang, {
                        text: content.freelanceTile
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.freelanceTile = data;

                    });
                dbService.translate(_lang, lang, {
                        text: content.salesTile
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.salesTile = data;

                    });
                dbService.translate(_lang, lang, {
                        text: content.about1
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.about1 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: content.about2
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.content.about2 = data;

                    });






                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen1
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen1 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen2
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen2 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen3
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen3 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen4
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen4 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen5
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen5 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen6
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen6 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen7
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen7 = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.gen8
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.gen8 = data;

                    });

                dbService.translate(_lang, lang, {
                        text: $scope.filler.signHere
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.signHere = data;

                    });
                dbService.translate(_lang, lang, {
                        text: $scope.filler.enterEmail
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.enterEmail = data;

                    });

                dbService.translate(_lang, lang, {
                        text: $scope.filler.empty
                    })
                    //if successfull creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.filler.empty = data;

                    });
                _lang = lang;
            }
        }

        $scope.send = function() {
            var contract = $scope.filler.gen1 + $scope.filler.party1 + $scope.filler.gen2 + $scope.filler.party2 + $scope.filler.gen3 + $scope.filler.genStartDate + $scope.filler.gen4 + $scope.filler.genEndDate + $scope.filler.gen5 + $scope.filler.genAgreement1 + $scope.filler.gen6 + $scope.filler.genAgreement2 + $scope.filler.gen7 + $scope.filler.state + $scope.filler.gen8 + ' '+ $scope.filler.signature+' '+ $scope.filler.signature2;

            //console.log(contract);
            var data = {
                text: contract
            };
            dbService.send($scope.filler.email, $scope.filler.email2, data);
            dbService.send($scope.filler.email2, $scope.filler.email, data);
            $('.modal').modal('hide');
        }
    }]);

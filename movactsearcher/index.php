<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<html lang="en-US">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/index.html.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
    <script type="text/javascript" src="scripts/app.js"></script>
    <body>
        <div ng-app="movActSearcher" class="container" >
            <div ng-view></div>
            <form ng-submit="submit()" ng-controller="ctrlSearcher">
                <div class="input-group">
                    <input type="search" ng-model="name" class="form-control" placeholder="Actor's/Movie's name">
                    <span class="input-group-btn">
                        <button class="btn btn-success" type="submit">Search</button>
                    </span>
                </div>
                
                <div class="panel panel-info marging-top">
                    <!--<pre>{{ result }}</pre>-->
                    <div class="panel-heading">Results</div>
                    <div class="panel-body" ng-repeat="res in movieList" ng-if="res.media_type == 'person'" >
                        <div style='text-align: center;'>
                            <img ng-if="res.profile_path != null" src='{{"http://image.tmdb.org/t/p/w300" + res.profile_path}}' class="img-thumbnail img-responsive img-circle" width="100px;" />
                            <p>{{res.name}}</p>
                        </div>
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Movie Title</th>
                                    <th>OverView</th>
                                </tr>
                            </thead>
                            <tr ng-repeat="mov in res.known_for">
                                <td>{{mov.original_title}}</td>
                                <td>{{mov.overview}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </form>
            <!--
            <div ng-controller="TypeAheadController">
                <p>Name : </p>
                <typeahead items="items" prompt="Start typing a US state" title="name" subtitle="abbreviation" model="name" on-select="onItemSelected()" />
            </div>-->
        </div>
    </body>
</html>

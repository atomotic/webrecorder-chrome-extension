# webrecorder-chrome-extension

record current active tab on webrecorder.io

## install

enable **Developer mode** in `chrome://extensions/` then **Load unpacked extension...** and pick the checkout directory

## build crx

    go get -u github.com/mcuadros/go-crxmake/...
    crxmake webrecorder-chrome-extension webrecorder-chrome-extension.crx 

then drag webrecorder-chrome-extension.crx on `chrome://extensions/`
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


const infoTab = document.querySelectorAll('.info-tab');
const infoItem = document.querySelectorAll('.info-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

function selectInfo(ev) {
	// Remove all show and border classes
	removeInfoBorder();
	removeInfoShow();
	// Add border to current tab item
	this.classList.add('info-border')
	// Grab content item from DOM
	const infoContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	infoContentItem.classList.add('showInfo');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

function removeInfoBorder() {
	infoTab.forEach(it => {
		it.classList.remove('info-border');
	}) 
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

function removeInfoShow() {
	infoItem.forEach(item => {
		item.classList.remove('showInfo');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

infoTab.forEach(it => {
	it.addEventListener('click', selectInfo);
});

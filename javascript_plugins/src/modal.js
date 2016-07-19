;(function() {
console.log(this);
  // define constructor
  this.Modal = function(options = {}) {

    // create global element references
    this.closeButton = null
    this.modal = null
    this.overlay = null

    // define option defaults
    const defaults = {
      className: 'fade-and-drop',
      closeButton: true,
      content: '',
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    }

    // create options by extending defaults with the passed in arguments
    this.opts = Object.assign({}, defaults, options)

    // Determine proper prefix
    this.transitionEnd = transitionSelect()
  }

  // public methods
  Modal.prototype.open = function() {
    // build out Modal
    buildOut.call(this)

    // initialize out event listeners
    initializeEvents().call(this)

    /*
     * After adding elements to the DOM, use getComputedStyle
     * to force the browser to recalc and recognize the elements
     * that we just added. This is so that CSS animation has a start point
     */
    window.getComputedStyle(this.modal).height

    /*
     * Add our open class and check if the modal is taller than the window
     * If so, our anchored class is also applied
     */
    this.modal.className = `${this.modal.className} ${(this.modal.offsetHeight > window.innerHeight) ? 'scotch-open scotch-anchored' : 'scotch-open'}`
    this.overlay.className = `${this.overlay.className} scotch-open`
  }

  Modal.prototype.close = function() {
    // Store the value of this
    const _ = this

    // remove the open class name
    this.modal.className = this.modal.className.replace('scotch-open', '')
    this.overlay.className = this.overlay.className.replace('scotch-open', '')


    /*
     * Listen for CSS transitionend event and then
     * Remove the nodes from the DOM
     */
    this.modal.addEventListener(this.transitionEnd, function() {
      _.modal.parentNode.removeChild(_.modal)
    })
    this.overlay.addEventListener(this.transitionEnd, function() {
      if (_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay)
    })
  }

  // private methods
  function buildOut() {
    let content,
        contentHolder,
        docFrag

    /*
     * If content is an HTML string, append the HTML string
     * If content is DOMNode, append its content
     */
    if (typeof this.opts.content === 'string') {
      content = this.opts.content
    } else {
      content = this.opts.content.innerHTML
    }

    // create a documentFragment to build with
    docFrag = document.createDocumentFragment()

    // create modal element
    this.modal = document.createElement('div')
    this.modal.className = `scotch-modal ${this.opts.className}`
    this.modal.style.minWidth = `${this.opts.minWidth}px`
    this.modal.style.maxWidth = `${this.opts.maxWidth}px`

    // If closeButton option is true, add a close button
    if (this.opts.closeButton) {
      this.closeButton = document.createElement('button')
      this.closeButton.className = `scotch-close close-button`
      this.closeButton.innerHTML = 'x'
      this.modal.appendChild(this.closeButton)
    }

    // If overlay is true, add one
    if (this.opts.overlay) {
      this.overlay = document.createElement('div')
      this.overlay.className = `scotch-overlay ${this.opts.className}`
      docFrag.appendChild(this.overlay)
    }

    // create content and append to modal
    contentHolder = document.createElement('div')
    contentHolder.className = 'scotch-content'
    contentHolder.innerHTML = content
    this.modal.appendChild(contentHolder)

    // append modal to document fragment
    docFrag.appendChild(this.modal)

    // append document fragment to body
    document.body.appendChild(docFrag)
  }

  function initializeEvents() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.close.bind(this))
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', this.close.bind(this))
    }
  }

  // Utility method to determine which transistionend event is supported
  function transitionSelect() {
    const el = document.createElement('div')
    if (el.style.WebkitTransition) return 'webkitTransitionEnd'
    if (el.style.OTransition) return 'oTransitionEnd'

    return 'transitionend'
  }
}())

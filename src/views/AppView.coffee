class window.AppView extends Backbone.View
  template: _.template '
    <div class="dealer-hand-container"></div>

    <div class="player-wrapper">
      <div class="player-hand-container"></div>
      <div class="player-controls">
        <button class="hit-button">Hit</button>
        <button class="stand-button">Stand</button>
        <button class="reset-button">Reset</button>
      </div>
    </div>
  '

  initialize: ->
    @render()
    me = @
    @model.on 'setUpNewHand', =>
      console.log('render view')
      me.render()

    @model.on 'gameOverView', =>
      console.log('game over view')
      $('.game-over').fadeIn();
      me.render()



  events:
    'click .hit-button': -> @model.get('playerHand').hit()
    'click .stand-button': -> @model.get('playerHand').stand()
    'click .reset-button': ->
      $('.game-over').fadeOut();
      @model.reset()
      @render()

  render: ->
    @$el.children().detach()
    @$el.html @template()
    @$('.player-hand-container').html new HandView(collection: @model.get 'playerHand').el
    @$('.dealer-hand-container').html new HandView(collection: @model.get 'dealerHand').el


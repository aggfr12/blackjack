class window.CardView extends Backbone.View
  className: 'card'

  template: _.template '<div class="<%= suitName %> num-<%= rankName %>"><%= rankName %> <%= suitName %></div>'

  initialize: -> @render()

  render: ->
    @$el.children().detach()
    @$el.html @template @model.attributes
    @$el.addClass 'covered' unless @model.get 'revealed'


__iconsData: {
    <% _.forEach(icons, icon => { %>
        '<%= icon.name %>': {
            width: '<%= icon.width %>',
            height: '<%= icon.height %>'
        },
    <% }); %>
}

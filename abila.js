<script>
        $(document).ready(function () {

            const apiUrl = 'https://159.223.51.203/api/bio'; 

            $.ajax({
                url: 'https://159.223.51.203/api/bio',
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    data.forEach(function (item) {
                        const name = item.name;
                        const id = item.id;

                        
                        const itemElement = `
                            <div class="item">
                                <h2>Name: ${name}</h2>
                                <p>ID: ${id}</p>
                            </div>
                        `;

                        
                        $('#data-container').append(itemElement);
                    });
                },
                error: function (error) {
                    console.error('Error:', error);
                }
            });
        });
    </script>
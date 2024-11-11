document.addEventListener("DOMContentLoaded", function () {
    // Define the main image and text elements
    const mainImage = document.getElementById("main-image");
    const title = document.getElementById("feature-title");
    const description = document.getElementById("feature-description");
    const ic = document.getElementsByClassName("icon");

    // Define an object for each icon with its specific title, description, and image source
    const icons = {
        icon1: {
            title: "Suggestion des recettes",
            description:
                "Découvrez des recettes à partir des ingrédients disponibles dans votre réfrigérateur. Accédez aux informations essentielles pour chaque recette : nom, ingrédients nécessaires, temps de préparation et étapes détaillées.",
            imgSrc: "images/ai.png",
        },
        icon2: {
            title: "Statistiques",
            description:
                "Consultez des rapports détaillés sur la quantité de nourriture gaspillée et suivez les économies réalisées en réduisant le gaspillage alimentaire. ZeroWaste vous aide à visualiser l’impact de vos efforts pour un mode de vie plus durable.",
            imgSrc: "images/statistics.png",
        },
        icon3: {
            title: "Reconnaissance par code barre",
            description:
                "Ajoutez des articles rapidement en scannant leurs codes-barres. Si disponibles dans la base de données, ils seront automatiquement enregistrés avec toutes les informations nécessaires.",
            imgSrc: "images/QR.png",
        },
    };

    // Function to handle click and swap images and text
    function handleIconClick(iconId) {
        // Get the clicked icon and its details
        const icon = document.getElementById(iconId);
        const iconData = icons[iconId];

        // Swap the main image with the clicked icon's image
        const tempSrc = mainImage.src;
        mainImage.src = iconData.imgSrc;
        icon.src = tempSrc;

        // Swap the sizes by applying CSS styles
        mainImage.classList.add("plate-icon");
        icon.classList.remove("plate-icon");
        icon.classList.add("icon");


        // Update the title and description text
        title.textContent = iconData.title;
        description.textContent = iconData.description;

        if (iconId === "icon3") {
            ic.style.marginTop = "20%";
            mainImage.style.height = "250px";
            mainImage.style.width = "250px";
        } else if (iconId === "icon1") {
            ic.style.marginTop = "-20%";
        } else if (iconId === "icon2") {
            ic.style.marginTop = "-5%";
        }/*else {
            // Reset to default size for other icons
            mainImage.style.height = "400px";
            mainImage.style.width = "400px";
        }*/
        
        // Update the title and description text
        title.textContent = iconData.title;
        description.textContent = iconData.description;
    }

    // Add click event listeners for each icon
    Object.keys(icons).forEach((iconId) => {
        document.getElementById(iconId).addEventListener("click", function () {
            handleIconClick(iconId);
        });
    });
});

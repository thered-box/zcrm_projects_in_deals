const body = document.body
let projectCard = document.getElementById('projectContainer')
projectCard.className = "projectContainer"
document.querySelector('button').addEventListener('click',getProject)
dealID = 4412784000082944012


function getProject(){

    let project = document.querySelector('input').value
    // const resp = await 
    fetch(`https://www.zohoapis.com/crm/v3/Deals/4412784000082944012/Zoho_Projects`,{
        method: "GET",
        headers: {
            {
                "connectionLinkName": "zohocrmandprojects",
                "connectionName": "zohocrmandprojects",
                "serviceName": "zlabs_integration",
                "userAccess": false,
                "isUserDefinedService": false,
                "sharedBy": "709863279",
                "scope": [
                    "ZohoCRM.modules.ALL",
                    "ZohoCRM.settings.modules.ALL",
                    "ZohoCRM.settings.modules.READ",
                    "ZohoCRM.users.ALL",
                    "ZohoCRM.users.READ",
                    "ZohoCRM.settings.fields.ALL",
                    "ZohoCRM.settings.fields.READ",
                    "ZohoCRM.settings.related_lists.ALL",
                    "ZohoCRM.settings.related_lists.READ",
                    "ZohoCRM.org.ALL",
                    "ZohoCRM.notifications.ALL",
                    "ZohoCRM.notifications.CREATE",
                    "ZohoCRM.notifications.WRITE",
                    "ZohoCRM.notifications.UPDATE",
                    "ZohoCRM.notifications.DELETE",
                    "ZohoCRM.modules.notes.ALL",
                    "ZohoCRM.modules.notes.READ",
                    "ZohoCRM.modules.notes.WRITE",
                    "ZohoCRM.modules.notes.CREATE",
                    "ZohoCRM.modules.notes.DELETE",
                    "ZohoCRM.functions.execute.CREATE",
                    "ZohoProjects.projects.READ",
                    "ZohoProjects.projects.CREATE",
                    "ZohoProjects.projects.UPDATE",
                    "ZohoProjects.projects.DELETE",
                    "ZohoProjects.projects.ALL",
                    "ZohoCRM.Files.CREATE",
                    "ZohoCRM.modules.accounts.ALL",
                    "ZohoCRM.modules.contacts.ALL",
                    "ZohoCRM.modules.deals.ALL",
                    "ZohoCRM.modules.custom.ALL",
                    "ZohoCRM.share.accounts.ALL",
                    "ZohoCRM.mass_update.accounts.UPDATE",
                    "ZohoCRM.mass_update.contacts.UPDATE",
                    "ZohoCRM.mass_update.deals.UPDATE",
                    "ZohoCRM.mass_update.campaigns.UPDATE",
                    "ZohoCRM.mass_update.activities.UPDATE",
                    "ZohoCRM.mass_update.custom.UPDATE",
                    "ZohoCRM.Files.READ",
                    "ZohoCRM.modules.attachments.all",
                    "ZohoCRM.settings.pipeline.READ",
                    "ZohoCRM.settings.pipeline.UPDATE",
                    "ZohoCRM.settings.pipeline.ALL",
                    "ZohoCRM.settings.pipeline.CREATE",
                    "ZohoCRM.modules.emails.READ",
                    "ZohoCRM.modules.READ"
                ]
}
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            drinksCards.textContent = ""
            // data.drinks.forEach(element => {
            //     let testDrink = CreateDrinkCard(element)
            // });
        })
    
    
}
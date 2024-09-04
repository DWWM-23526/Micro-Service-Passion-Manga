const fetchUsersFromApi = require("./fetchUsersFromApi");
const User = require("../models/user");

const synchronizeUsers = async () => {
  try {
    const response = await fetchUsersFromApi();
    const usersFromApiData = response.data;

    const existingUsers = await User.find({}, "_id email").lean();

    const existingUsersMap = new Map(existingUsers.map((user) => [user._id, user]));

    const bulkOperations = [];

    for (const user of usersFromApiData) {
        const existingUser = existingUsersMap.get(user.id);

      if (existingUser) {
        if (existingUser.email !== user.email) {
          bulkOperations.push({
            updateOne: {
              filter: { _id: user.id },
              update: {
                $set: {
                  email: user.email,
                },
              },
            },
          });
          console.log(`Utilisateur ${user.name} mis à jour.`);
        }
      } else {
        bulkOperations.push({
          insertOne: {
            document: {
              _id: user.id,
              email: user.email,
            },
          },
        });
        console.log(`Nouvel utilisateur ${user.name} ajouté.`);
      }
    }

    if (bulkOperations.length > 0) {
      const result = await User.bulkWrite(bulkOperations);
      console.log(
        `Synchronisation des utilisateurs terminée. Opérations : ${result.modifiedCount} mises à jour, ${result.upsertedCount} insertions.`
      );
    } else {
      console.log("Aucun changement détecté lors de la synchronisation.");
    }
  } catch (error) {
    console.error("Erreur lors de la synchronisation des utilisateurs:", error);
  }
};

module.exports = synchronizeUsers;

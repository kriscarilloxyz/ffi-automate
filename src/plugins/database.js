
/**
 * Helper class for pulling and pushing
 * data in firebase realtime database
 * 
 * @class Database
 */
class Database {
  /**
   * Creates an instance of Database.
   * @param {firebase.database} database
   * @memberof Database
   */
  constructor(database) {
    this.database = database
  }

  async add (reference, payload) {
    return this.database
      .ref(reference)
      .push(payload)
  }

  /**
   * Pulls document from database
   *
   * @param {String} reference path to document in database 
   * @return {Promise} returns document from path or null if not existing 
   * @memberof Database
   */
  async read (reference) {
    return this.database
      .ref(reference)
      .once('value')
      .then(snapshot => snapshot.val())
  }

  /**
   * Pulls documents from database
   *
   * @param {String} reference path to collection of documents in database
   * @return {Promise} returns documents from path or null if not existing 
   * @memberof Database
   */
  async readMany (reference) {
    return this.database
      .ref(reference)
      .once('value')
      .then(snapshot => {
        const docs = snapshot.val()
        if (docs) {
          return Object.keys(docs)
            .map(key => {
              return {
                ...docs[key],
                key
              }
            })
        }
      })
  }

  /**
   * Updates a document in database 
   *
   * @param {String} reference path to document in database
   * @param {Object} payload data to update
   * @return {Promise} 
   * @memberof Database
   */
  update (reference, payload) {
    return this.database
      .ref(reference)
      .update(payload)
  }

  /**
   * Overwrites a document in database
   *
   * @param {String} reference path to document in database
   * @param {Object} payload data to overwrite
   * @return {Promise} 
   * @memberof Database
   */
  async overwrite (reference, payload) {
    return this.database
      .ref(reference)
      .set(payload)
  }


  async remove (reference) {
    return this.database
      .ref(reference)
      .remove()
  }
}

export default Database
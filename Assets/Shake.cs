using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shake : MonoBehaviour
{
    // Start is called before the first frame update
  

    public float speed = 0.01f;
    public float amount = 1.0f;
    public GameObject Player; 
    private GameObject Car;
    private Vector3 RelPos;
  //  private Vector3 distance;
   // public float dist;
    

    

    // Start is called before the first frame update

    // Update is called once per frame
    void Start()
    {
        RelPos = Player.transform.position - Player.transform.parent.position;
    }
    void OnTriggerStay()
    {
            Debug.Log("shake");
            Player.transform.position = Player.transform.parent.position + RelPos + (Vector3.right * Random.Range(-0.1f, 0.1f) * speed);
           // Player.transform.poition = Mathf.Clamp
    }
    void Update()
    {
        
       // distance = (transform.position - Player.transform.position);
       // dist = (1 / distance.z) * 10;
    }
}

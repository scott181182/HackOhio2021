using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraShake : MonoBehaviour
{

    public float speed = 0.7f;
    public float amount = 1.0f;

    

    // Start is called before the first frame update

    // Update is called once per frame
    void OnTriggerStay()
    {
          //  transform.position.x = Mathf.Sin(Time.deltaTime * speed) * amount;
    }
}
